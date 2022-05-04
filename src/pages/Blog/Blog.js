import React from 'react';
import { Table } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mt-2'>Question and Answer</h2>

            <h3 className='mt-3'>Question-01: Difference Between JavaScript vs Node JS</h3>

            <h2> Answer:</h2>
            <p><strong> Difference between authorization and authentication</strong></p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>JavaScript</th>
                        <th>Node.js</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>JavaScript is a simple programming language that runs in any browser JavaScript Engine.</td>
                        <td>Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application.</td>
                        <td>Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser.</td>
                        <td>Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>JavaScript is a very popular programming language which generally used by any web application developer. It is very easy to find a resource on the same for work on JavaScript and do some specific development.</td>
                        <td>Node JS is an extension of JavaScript libraries, but it came with some undefined utilities like non-blocking operating system activity, which sometimes very much require for meeting some organization requirement.</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>It is designed to build network-centric applications.</td>
                        <td>It's designed for data-intensive real-time applications that run on several platforms.</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>It is generally used on the client-side server.</td>
                        <td>It is generally used on the server-side.</td>
                    </tr>
                </tbody>
            </Table>

            <h3>Question-02: When should you use node js and when should you use mongodb?</h3>

            <h2> Answer:</h2>
            <p>
                Nodejs is a Javascript engine that we can write any application we want with. It runs our Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                <br />

                MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

                MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc.
                <br />
                <strong>Summary:</strong> Finally we say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.
                <br />

                Besides, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.

            </p>

            <h3>Question-03: Differences between SQL and NoSQL databases</h3>

            <h2> Answer:</h2>
            <p><strong> DDifferences between SQL and NoSQL databases.</strong></p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>SQL</th>
                        <th>NoSQL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>SQL databases are primarily called as Relational Databases (RDBMS). </td>
                        <td>NoSQL database are primarily called as non-relational or distributed database.</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>SQL databases are table-based.</td>
                        <td>oSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>These databases have fixed or static or predefined schema.</td>
                        <td>They have dynamic schema.</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>SQL databases are better for multi-row transactions.</td>
                        <td>NoSQL is better for unstructured data like documents or JSON.</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>In almost all situations SQL databases are vertically scalable. This means that it can increase the load on a single server by increasing things like RAM, CPU or SSD.</td>
                        <td>NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>It is similar to adding more floors to the same building versus adding more buildings to the neighborhood.</td>
                        <td>NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>SQL databse Vertically Scalable.</td>
                        <td>NoSQL database Horizontally scalable.</td>
                    </tr>
                </tbody>
            </Table>

            <h3>Question-04: What is the purpose of JWT and how does it work?</h3>

            <h2> Answer:</h2>
            <p>
                Puropse of JWT: The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                JWT, or JSON Web Token, is an open standard used to share security information between two parties - a client and a server. Each JWT contains encoded JSON objects, including a set of claims.
                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.

                <br />
                How it is work:  Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt or public key.

                First, User sign-in using username and password or google/facebook. Then,
                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                After that, User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. And then,
                Resource server then verifies the authenticity of the token using the secret or public key.
            </p>

        </div>
    );
};

export default Blog;