import * as React from "react";
import {ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache} from '@apollo/client';
import i18next from "i18next";
import {ACCESS_TOKEN, CONNECTED_INSTANCE, PHONE_NUMBER} from "../../constants";
import KeyBuilder from "../../utils/KeyBuilder";
import {DateTime} from "luxon";
import DialogStore from "../../stores/DialogStore";
import TokenRefresher from "../../modules/token-refresher";

class Client {

    httpLink!: any;
    connected: any;
    authMiddleware!: ApolloLink;

    constructor(client: string) {
        this.httpLink = new HttpLink({ uri: client });
        if(localStorage.getItem(CONNECTED_INSTANCE)) {
            this.connected = JSON.parse(localStorage.getItem(CONNECTED_INSTANCE) as string ?? "");
        }
        this.authMiddleware = new ApolloLink((operation, forward) => {
            // add the authorization to the headers
            operation.setContext({
                headers: {
                    "X-Lang": i18next.language,
                    "X-Lat": "0",
                    "X-Long": "0",
                    Authorization: "Bearer " + (localStorage.getItem(ACCESS_TOKEN) ?? KeyBuilder.build),
                }
            });
            if(this.connected && this.connected.expiredIn < parseInt(DateTime.fromJSDate(new Date()).toFormat("x"))) {
                // TODO remove comment here
                // DialogStore.openFromOutside({
                //     title: "Confirmation",
                //     content: <TokenRefresher />,
                //     size: "sm"
                // })
            }
            return forward(operation);
        })
    }

    get getClient() {
        return new ApolloClient({
            name: 'thinfood',
            cache: new InMemoryCache(),
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'cache-and-network',
                    errorPolicy: 'ignore',
                },
                query: {
                    fetchPolicy: 'no-cache',
                    errorPolicy: 'all',
                },
            },
            link: concat(this.authMiddleware, this.httpLink),
        });
    }

}

export default Client;
