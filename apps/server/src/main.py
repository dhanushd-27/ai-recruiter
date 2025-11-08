from google import genai
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

response = client.models.generate_content(
    model="gemini-2.5-flash", contents="List 7 wonders of the world in bullet points"
)
print(response.text)