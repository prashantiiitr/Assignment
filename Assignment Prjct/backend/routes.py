from flask import Blueprint, jsonify, request
from bson.objectid import ObjectId
from models import overlays_collection

api_routes = Blueprint('api', __name__)

@api_routes.route('/api/overlays', methods=['POST'])
def create_overlay():
    overlay = request.json
    overlays_collection.insert_one(overlay)
    return jsonify({'message': 'Overlay created'}), 201

@api_routes.route('/api/overlays', methods=['GET'])
def read_overlays():
    overlays = list(overlays_collection.find())
    for overlay in overlays:
        overlay['_id'] = str(overlay['_id'])
    return jsonify(overlays), 200

@api_routes.route('/api/overlays/<overlay_id>', methods=['PUT'])
def update_overlay(overlay_id):
    overlay = request.json
    overlays_collection.update_one({'_id': ObjectId(overlay_id)}, {'$set': overlay})
    return jsonify({'message': 'Overlay updated'}), 200

@api_routes.route('/api/overlays/<overlay_id>', methods=['DELETE'])
def delete_overlay(overlay_id):
    overlays_collection.delete_one({'_id': ObjectId(overlay_id)})
    return jsonify({'message': 'Overlay deleted'}), 200
