import React, { Component } from 'react';
import { Helmet } from "react-helmet"

export class Scripts extends Component {
    render() {
        return (
            <div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"
                        crossOrigin="anonymous"
                        integrity="sha384-rZfj/ogBloos6wzLGpPkkOr/gpkBNLZ6b6yLy4o+ok+t/SAKlL5mvXLr0OXNi1Hp">
                </script>
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validation-unobtrusive/3.2.11/jquery.validate.unobtrusive.min.js"
                    crossOrigin="anonymous"
                    integrity="sha384-R3vNCHsZ+A2Lo3d5A6XNP7fdQkeswQWTIPfiYwSpEP3YV079R+93YzTeZRah7f/F">
                </script>
            </div>
        );
    }
}
