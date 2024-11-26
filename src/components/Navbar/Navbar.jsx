import { useState } from "react";
import { Box, Stack, IconButton, Avatar, Button, Typography } from '@mui/material'

import ai_icon from "/ai_icon.svg";
import { FaRegEdit } from "react-icons/fa";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({setshowPastConversations}) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <Box
                minWidth={{md: "30vw"}}
                maxWidth={{md: "300px"}}
                width={{ xs: "65vw", sm: "45vw"}}
                height="100%"
                component="aside"
                sx={{ 
                   backdropFilter: "blur(5px)" ,background:"rgba(255, 255, 255, .2)", outline: "var(--outline)", position: { xxs: "absolute", md: "static" }, zIndex: "999", 
                    display: { xxs: `${showMenu ? "block" : "none"}`, md: "block" } 
                }}
            >
                <Stack
                    sx={{ height: "100%", width: "100%", px: "0", mx: "0", backdropFilter:"inherit" }}
                >
                    <Stack
                        component="header"
                        direction="row"
                        gap={{ xxs: 2, sm: 4, lg: 7 }}
                        justifyContent={{xxs: "space-evenly", md: "center"}}
                        alignItems="center"
                        alignContent="center"
                        sx={{ py: 1.5, px: 1.5, background: "linear-gradient(0deg, #D7C7F4, #D7C7F4)", backdropFilter:"inherit" }}
                    >
                        <Avatar
                            sx={{
                                boxShadow: "0px 4px 4px 0px #00000040", width: 32, height: 32,
                            }}
                            alt="Remy Sharp"
                            src={ai_icon}
                        />
                        <Button
                            endIcon={
                                <FaRegEdit height="24px" width="24px" color="black" />
                            }
                            onClick={() => setshowPastConversations(false)}
                        >
                            <Typography color="black">New Chat</Typography>
                        </Button>

                        {showMenu && (
                            <IconButton
                                sx={{ display: { md: "none" } }}
                                onClick={() => setShowMenu(false)}
                            >
                                <CloseIcon
                                    sx={{ zIndex: "999", position: "absolute" }}
                                />
                            </IconButton>
                        )}
                    </Stack>
                    <Box
                        component="section"
                        m={2}
                        alignSelf="stretch"
                        height="100%"
                    >
                        <Button sx={{ p: 0, m: 1 }}
                            onClick={() => setshowPastConversations(true)}
                        >
                            <Typography
                                variant="div"
                                component="h1"
                                fontSize="16px"
                                lineHeight="18.38px"
                                p={2}
                                sx={{ background: "linear-gradient(0deg, #D7C7F4, #D7C7F4)", borderRadius: "10px", backdropFilter:"inherit" }}
                            >
                                Past Conversations
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
            </Box>

            {!showMenu && (
                <IconButton
                    sx={{ pt: 2.5, pl: 2.5, alignSelf: "baseline", display: { xs: "inline-block", md: "none" } }}
                    onClick={() => setShowMenu(true)}
                >
                    <img src="/hamburger.svg" alt="hamburger_icon" />
                </IconButton>
            )}
        </div>
    );
};

export default Navbar;
