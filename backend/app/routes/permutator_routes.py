from flask import Blueprint, request, jsonify
from app.services.email_service import generate_permutations, verify_email_smtp

permutator_bp = Blueprint('permutator', __name__)

@permutator_bp.route('/permutator', methods=['POST'])
def permutator():
    data = request.json
    domain = data.get('domain')
    
    if not domain:
        return jsonify({"error": "domain is required"}), 400
        
    finds = data.get('finds')
    
    # Handle bulk request
    if isinstance(finds, list):
        results = []
        for person in finds:
            fn = person.get('first_name')
            ln = person.get('last_name')
            if fn and ln:
                emails = generate_permutations(fn, ln, domain)
                verifications = [verify_email_smtp(e) for e in emails]
                results.append({
                    "first_name": fn,
                    "last_name": ln,
                    "verifications": verifications
                })
        return jsonify({"results": results})
        
    # Handle legacy single request
    fn = data.get('first_name')
    ln = data.get('last_name')
    if fn and ln:
        emails = generate_permutations(fn, ln, domain)
        results = [verify_email_smtp(e) for e in emails]
        return jsonify(results)
        
    return jsonify({"error": "either 'finds' list or 'first_name' and 'last_name' are required"}), 400
