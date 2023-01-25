import React from "react";
import moment from "moment/moment";
import 'moment/locale/ru';

export default function withDateTimePretty(Component){
    const HOCComponent = (props) => {
        const updateDateTime = moment(props.date).fromNow();

        return <Component {...props} date={updateDateTime} />;
    }
    HOCComponent.displayName = 'DateTimePrettyHOC';
    return HOCComponent;
};