import boto3
import os
def lambda_handler(event: any, context: any):
    visit_count = 0
    dynamodb = boto3.resource("dynamodb")
    table_name = os.environ["TABLE_NAME"]
    table = dynamodb.Table(table_name)


    response = table.get_item(Key={"id": 1})
    if "Item" in response:
        visit_count = response["Item"]["count"]
    
    visit_count += 1

    table.put_item(Item={"id": 1, "count": visit_count})
    