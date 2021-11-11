export const handler: AWSLambda.Handler = async (
    event: AWSLambda.APIGatewayProxyEvent,
    context: AWSLambda.Context,
    callback: AWSLambda.Callback,
): Promise<void> => {
    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: 'hello world' }),
    });
};

export const handler2: AWSLambda.Handler = async (
    event: AWSLambda.APIGatewayProxyEvent,
    context: AWSLambda.Context,
    callback: AWSLambda.Callback,
): Promise<void> => {
    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: event.body,
    });
};
