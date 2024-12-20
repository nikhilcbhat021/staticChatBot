import { Typography, Container, Stack, TextField, Grid2, Box } from "@mui/material";
import { memo, useCallback, useEffect, useState } from "react";

import sampleData from '../../assets/sampleData.json';
import QuestionInput from "../QuestionInput/QuestionInput";
import ChatCard from '../ChatCard/ChatCard';

/**
 * 
 * We make the api call to get the answer here...
 * 
 * @param question : String 
 * @returns String: Ans for the question
 */
const fetchAns = async (question) => {
    console.log(question)
    return (sampleData.find((data, index) => {
        // console.log(data, index);
        return data.question === question.title;
    }) || {response: "As an AI Language Model, I don't have the details"})
}

const Conversation = memo(({addConversation, initialQuestion}) => {

    const [question, setQuestion] = useState({'title': initialQuestion, 'time': new Date().toLocaleTimeString("en-IN")});
    const [currConv, setCurrConv] = useState({'time': new Date().toLocaleDateString("en-IN"), 'chats': []}); // an array of {queAnsPair}

    const askQuestion = useCallback((__question__) => {
        setQuestion({'title': __question__, 'time': new Date().toLocaleTimeString("en-IN")});
    }, [setQuestion]);

    const updateUserExperience = useCallback((id, rating="", feedback="") => {
        if (!rating && !feedback)
            return;

        setCurrConv(curr => {
            const updatedChats = curr.chats.map((chat) => {
                console.log(chat);
                if (chat.answer.id === id) {
                    const feedbackAnsObj = {...chat};

                    if (rating)
                        feedbackAnsObj['answer']['rating'] = rating;
                    
                    if (feedback)
                        feedbackAnsObj['answer']['feedback'] = feedback;

                    return feedbackAnsObj;
                }
                return chat;
            });

            return {...curr, 'chats': [...updatedChats]};
        })
    }, [setCurrConv])

    useEffect(() => {
        console.log("Conversation mounted");
        return () => {console.log("Conversation unmounted");}
    },[])

    useEffect(() => {
        // create the question card...
        console.log("initial question - ", initialQuestion, " ", question);
        (async() => {
            const title = await fetchAns(question);
            const answer = {
                'id': crypto.randomUUID(),
                'title': title.response, 'time': new Date().toLocaleTimeString("en-IN"), 'rating': '', 'feedback': ''
            }
            setCurrConv(c => ({...c, 'chats':[...c['chats'], {'question': question, 'answer': answer}]}));
        })()
    }, [question])

    useEffect(() => {
        console.error(currConv);
    }, [currConv])
    
    return (
        <Container
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent:'space-between',
                alignItems: "stretch",
                textAlign: "start",
            }}
        >
            
            <Stack
                m={2}
                gap={6}
                // pr={{xxs:6 , md:0}}
                direction="column"
                flexGrow="1"
                justifyContent="flex-end"
            >
                <Stack
                    flexDirection="column"
                    gap={1}
                >
                    {currConv.chats.map((pair, idx) => {
                        return (
                            <Box sx={{
                                display:"flex", 
                                gap:'8px', 
                                flexDirection:'column', 
                                ":first-child": {
                                    // bgcolor: 'rgba(215, 199, 244, 0.13)',
                                    borderRadius: '20px',
                                },
                                ":last-child": {
                                    // bgcolor: 'rgba(215, 199, 244, 0.13)',
                                    borderRadius: '20px',
                                }
                            }} key={pair.answer.id}>
                                <ChatCard
                                    bgcolor='rgba(215, 199, 244, 0.13)'
                                    updateFeedbackRating={({rating, feedback}) => updateUserExperience(pair.answer.id, rating, feedback)}
                                    isAI={false} title={pair.question.title} time={pair.question.time}
                                />

                                <ChatCard
                                    bgcolor='rgba(215, 199, 244, 0.13)'
                                    updateFeedbackRating={({rating, feedback}) => updateUserExperience(pair.answer.id, rating, feedback)}
                                    isAI={true} title={pair.answer.title} time={pair.answer.time} 
                                    rating={pair.answer.rating} feedback={pair.answer.feedback}
                                />
                            </Box>
                        )
                    })}
                </Stack>
                <QuestionInput askQuestion={askQuestion} save={() => addConversation(currConv)} />
            </Stack>
        </Container>
    );
});

export default Conversation;
