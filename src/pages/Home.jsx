import {
    Container,
    Typography,
    Stack,
} from "@mui/material";
import { useState, useEffect, useCallback, memo, useMemo } from "react";
import Conversation from "../components/Conversation/Conversation";
import PastConversations from "../components/PastConversations/PastConversations";

import Navbar from "../components/Navbar/Navbar";
import QuestionInput from "../components/QuestionInput/QuestionInput";
import Hero from "../components/Hero/Hero";

export const useLocalStorage = (key, initialValue) => {
    const [stateValue, setStateValue] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);
    
    const parser = (key, data) => {
        console.error(key, data);
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(stateValue));
    }, [key, stateValue])

    return [stateValue, setStateValue];
}

const Home = () => {
    const [allConversations, setAllConversations] = useLocalStorage('allConversations', []);

    const [showPastConversations, setShowPastConversations] = useState(false);
    const [conversing, setConversing] = useState(false);
    const [question, setQuestion] = useState("");

    const startConversation = useCallback((question) => {
        setQuestion(question);
        setConversing(true);
    }, []);


    useEffect(() => {
        console.error(allConversations);
    }, [allConversations])

    return (
        <Container
            maxWidth="false"
            sx={{
                background: { xxs: "linear-gradient(180deg, #F9FAFA 29%, #EDE4FF 100%)", md: 0 },
                display: "flex",
                minHeight: "100vh",
                px: "2",
                position:'relative',
            }}
        >
            <Navbar setshowPastConversations={setShowPastConversations}/>
            <Container
                maxWidth="xl"
                component="main"
                sx={{
                    outline: "var(--outline)",
                    display:'flex',
                    flexDirection:'column',
                    background: {
                        xxs: "linear-gradient(180deg, #F9FAFA 29%, #EDE4FF 100%)",
                        md: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
                    },
                }}
            >
                <Typography variant="h1" color="primary.900" p={1.5} mb={6} textAlign="start">
                    Bot AI
                </Typography>

                { !showPastConversations ? 
                    (<Stack
                        m={2}
                        gap={6}
                        pr={{xxs:6 , md:0}}
                        direction="column"
                        flexGrow="1"
                        justifyContent="flex-end"
                    >
                        {!conversing ? (<>
                                <Hero converse={(q) => startConversation(q)}/> 
                                <QuestionInput askQuestion={(q) => startConversation(q)} />
                            </>) : (
                                <Conversation addConversation={(conv) => {
                                    console.error(conv);
                                    setAllConversations(c => [...c, conv]);
                                    setConversing(false);
                                }} initialQuestion={question} />
                            )
                        }
                    </Stack> ) : ( 
                        <PastConversations allConversations={allConversations}/>
                    )
                }
            </Container>
        </Container>
    );
};

export default Home;
