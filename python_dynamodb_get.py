import boto3
from boto3.dynamodb.conditions import Key, Attr

# For a Boto3 service resource ('resource' is for higher-level, abstracted access to Dynamo)
dynamodb = boto3.resource('dynamodb', endpoint_url='http://localhost:8000', region_name='us-east-1')

print(list(dynamodb.tables.all()))

table = dynamodb.Table('Journal')


def getEntry(table):
    response = table.get_item(
        Key={
            'Book_ID': 1,
            'Date': '11/26/2019'
        }
    )
    item = response['Item']
    print(item)


def queryTable(table):
    response = table.query(
        KeyConditionExpression=Key('Book_ID').eq(1)
    )
    items = response['Items']
    print(items)

#getEntry(table)
queryTable(table)
