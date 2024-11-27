import React from "react";
import { Rating } from "@mui/material";
import { useState } from "react";

const RatingForm = ({addRating, readOnly, defaultValue}) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <Rating
            readOnly={readOnly}
            sx={{alignSelf: 'center', fontSize: '16px !important'}}
            component="div"
            // size="large"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                addRating(newValue);
            }}
        />
    );
};

export default RatingForm;
