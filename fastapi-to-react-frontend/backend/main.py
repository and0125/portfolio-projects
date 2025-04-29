import uvicorn  
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

"""
Model Setup
"""
class Fruit(BaseModel):
    name: str

class Fruits(BaseModel):
    fruits: List[Fruit]

app = FastAPI()

"""
 CORS Configuration: 
 
 defines base origin of any domain that needs to be accessed; this is a list of trusted sources, and block out requests from any other domain

"""
origins = [
    "http://localhost:5173",  # React app port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

"""
Mocking DB with Dictionary
"""
memory_db = {"fruits": []}

"""
API Endpoints
"""

@app.get(path="/fruits", response_model=Fruits)
def get_fruits():
    """
    Get all fruits from the mock database
    """
    return Fruits(fruits=memory_db["fruits"]) # automatically converts the list of fruits to the Fruits model and into JSON format


@app.post(path="/fruits", response_model=Fruit)
def add_fruit(fruit: Fruit):
    """
    Add a new fruit to the mock database
    """
    memory_db["fruits"].append(fruit)
    return fruit # returns the newly added fruit in JSON format

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)  # Run the FastAPI app on port 8000