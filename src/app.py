from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/bfhl', methods=['GET', 'POST'])
def bfhl():
    if request.method == 'POST':
        return handle_post_request()
    elif request.method == 'GET':
        return handle_get_request()

def handle_post_request():
    try:
        # Parse JSON data
        data = request.json.get('data', [])
        
        # Separate numbers and alphabets
        numbers = [item for item in data if item.isdigit()]
        alphabets = [item for item in data if item.isalpha()]
        
        # Determine the highest alphabet
        highest_alphabet = max(alphabets, key=lambda x: x.lower(), default="")
        highest_alphabet = [highest_alphabet] if highest_alphabet else []
        
        # Response
        response = {
            "is_success": True,
            "user_id": "SAGAR-055",  
            "email": "sagarsuhaschavan367@gmail.com",
            "roll_number": "RA2111003010818",
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": highest_alphabet
        }
        return jsonify(response), 200
    except Exception as e:
        return jsonify({"is_success": False, "message": str(e)}), 500

def handle_get_request():
    response = {
        "operation_code": 1
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
