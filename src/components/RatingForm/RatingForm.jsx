import React from "react";
import { Rating } from "@mui/material";
import { useState } from "react";

const RatingForm = ({addRating}) => {
    const [value, setValue] = useState(5);
    return (
        <Rating
            sx={{alignSelf: 'center', fontSize: '2rem !important'}}
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
