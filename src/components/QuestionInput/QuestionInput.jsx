// import React from 'react'
import { Grid2, TextField } from "@mui/material";
import MainButton from "../Utils/Button";
import { memo, useEffect, useCallback, useState } from "react";

const QuestionInput = memo(({askQuestion, save=undefined}) => {

    const [question, setQuestion] = useState("");

    return (
        <div>
            <Grid2
                container
                spacing={3}
                sx={{
                    position: { xxs: "absolute", md: "relative" },
                    inset: { xxs: "auto 10px 10px 10px", md: "auto 0 0 0" },
                }}
            >
                <Grid2 size={"grow"}>
                    <TextField
                        value={question}
                        onChange={(e) => {
                            setQuestion(e.target.value);
                        }}
                        fullWidth
                        label="Ask me anything"
                        size="large"
                        id="fullWidth"
                        variant="outlined"
                    />
                </Grid2>

                <Grid2 size={"auto"}>
                    <MainButton
                        variant="contained"
                        size="large"
                        onClick={() => askQuestion(question)}
                    >
                        Ask
                    </MainButton>
                </Grid2>

                <Grid2 size={"auto"}>
                    <MainButton variant="contained" size="large" onClick={save}>
                        Save
                    </MainButton>
                </Grid2>
            </Grid2>
        </div>
    );
});

export default QuestionInput;
