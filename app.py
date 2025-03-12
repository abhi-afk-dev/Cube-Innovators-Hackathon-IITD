from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

# Directly set the API key (NOT RECOMMENDED for production)
api_key = "YOUR_ACTUAL_API_KEY"  # Replace with your actual API key

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

app = Flask(__name__)
CORS(app)

@app.route('/')
def static_page():
    return render_template('index.html')

@app.route('/over')
def overlay():
    return render_template('overlay.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/skills/web_base')
def web_base():
    return render_template('web_base.html')

@app.route('/skills/ml_base')
def ml_base():
    return render_template('ml_base.html')

@app.route('/skills/python_base')
def python_base():
    return render_template('python_base.html')

@app.route('/skills/full_base')
def full_base():
    return render_template('full_base.html')

@app.route('/skills/js_base')
def js_base():
    return render_template('js_base.html')

@app.route('/skills/reactjs_base')
def reactjs_base():
    return render_template('reactjs_base.html')


@app.route('/skills/web_base/letsgoweb')
def letsgoweb():
    return render_template('letsgoweb.html')

@app.route('/skills/web_base/letsgofull')
def letsgofull():
    return render_template('letsgoweb.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')