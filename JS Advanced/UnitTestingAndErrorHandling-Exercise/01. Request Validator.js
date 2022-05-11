function solve(httpObject) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let method = httpObject.method;

    if (method == undefined || !validMethods.includes(method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    let validUri = /^([a-zA-Z0-9\.]+|\*)$/g;
    let uri = httpObject.uri;

    if ((uri == undefined) || !validUri.test(uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let version = httpObject.version;

    if (version == undefined || !validVersions.includes(version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    let message = httpObject.message;

    if ((message == undefined) || message != '' && !/^[^<>\\&'"]*$/gm.test(message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return httpObject;
}

solve({
    method: 'GET',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
  }
  )
