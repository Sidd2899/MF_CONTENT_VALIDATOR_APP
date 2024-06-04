from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import DocumentAnalysisClient
from openai import AzureOpenAI
from src.config.credentials import endpoint, endpoint_key, api_key, api_version, azure_endpoint
import json


client = AzureOpenAI(
    api_key=api_key,
    api_version=api_version,
    azure_endpoint=azure_endpoint
)

credential = AzureKeyCredential(endpoint_key)
document_analysis_client = DocumentAnalysisClient(endpoint, credential)


class AnalyzeDocumet():
    def __init__(self) -> None:
        pass

    def analyze_document(self,file_path):
        try:
            with open(file_path, "rb") as file:
                document_data = file.read()

            poller = document_analysis_client.begin_analyze_document("prebuilt-idDocument", document_data)
            result = poller.result()

            text_data = []
            for page in result.pages:
                for line in page.lines:
                    text_data.append(line.content)
            document_text = ', '.join(text_data)
            return 1, document_text
        except Exception as e:
            return 2, f"Error: {e}"


    def extract_value(self,document_text, prompt, questions):
        document_text_str = json.dumps(document_text)
        prompt_str = json.dumps(prompt)
        questions_str = json.dumps(questions)
        content = document_text_str + "\n" + questions_str + "\n" + prompt_str
        user_message = {
            "role": "user",
            "content": content
        }

        conversation = [
            {"role": "system", "content": "Assistant is a large language model trained by OpenAI."},
            user_message
        ]

        try:
            response = client.chat.completions.create(
                model="v-ai-turbo",
                messages=conversation
            )

            responses = {questions[i]: choice.message.content for i, choice in enumerate(response.choices)}
            split_response = responses['S'].split('\n')
            formatted_response = {}
            for item in split_response:
                key, value = item.split(':')
                key = key.strip()
                value = value.strip()
                formatted_response[key] = value
            return 1, formatted_response
        except Exception as e:
            return f"An error occurred: {e}"
            