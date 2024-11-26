import { Stack, Typography, Avatar, Grid2, Paper,  } from "@mui/material"

import sampleData from '../../assets/sampleData.json';
import ai_icon from "/ai_icon.svg";
import { useMemo, memo, useEffect, useState} from 'react';

const Hero = memo(({converse}) => {

    const randomQues = useMemo(() => {
        console.log("calculating random...");
        const randomArray = Array(4).fill(0).map((_,i) => sampleData[Math.floor(Math.random() * sampleData.length)]);
        // console.log(randomArray);

        return randomArray;
    } , [sampleData])

    const startConversation = (_id) => {
        console.log(_id);
        console.log(sampleData[_id - 1]);
        converse(sampleData[_id - 1].question);
        // Go to StartConversation Page from here....
    }

    
    return (
        <Stack
            m={2}
            gap={6}
            direction="column"
            flexGrow="1"
            justifyContent="flex-end"
        >
            <Stack direction={"column"} alignItems="center" gap={2} my="auto">
                <Typography variant="h3" textAlign="center">
                    How Can I Help You Today?
                </Typography>
                <Avatar
                    sx={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                        width: 32,
                        height: 32,
                        alignSelf: "center",
                    }}
                    alt="Remy Sharp"
                    src={ai_icon}
                />
            </Stack>
            <Grid2 container my={{ xxs: 10, md: 0 }} spacing={3}>
                {randomQues.map((queObj, i) => {
                    return (
                        <Grid2
                            key={queObj.id}
                            size={{ xxs: 12, md: 6 }}
                            sx={{ minHeight: "6rem" }}
                        >
                            <Paper
                                elevation={3}
                                component="div"
                                onClick={() => startConversation(queObj.id)}
                                sx={{
                                    padding: `1rem .5rem 2rem 1rem`,
                                    height: "100%",

                                    cursor: "pointer",
                                    ":hover": {
                                        transition: "all 0.5s ease",
                                        bgcolor: "rgb(0,0,0,.1)",
                                    },
                                    overflow: "clip",
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: 'start',
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    gap: 1,
                                }}
                            >
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontFamily: "fontFamily.primary",
                                        // textWrap:'nowrap',
                                        // overflow:'hidden',
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        lineHeight: "23px",
                                        color: "text.primary",
                                    }}
                                >
                                    {queObj.question}
                                </Typography>

                                <Typography
                                    variant="p"
                                    sx={{
                                        color: "text.disabled",
                                    }}
                                >
                                    Get immediate AI generated response
                                </Typography>
                            </Paper>
                        </Grid2>
                    );
                })}
            </Grid2>
        </Stack>
    );
});

export default Hero;
