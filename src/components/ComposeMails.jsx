import React from "react";
import {
  Box,
  Dialog,
  InputBase,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: "14px",
    fontWeight: 500,
  },
});

const RecipientWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
    marginTop: 10,
  },
});

const ComposeMails = () => {
  return (

    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" />
      </Header>
      <RecipientWrapper>
        <InputBase placeholder="Recipient" />
        <InputBase placeholder="Subject" />
      </RecipientWrapper>
      <TextField
        multiline
        rows={20}
        sx={{ '& .MuiOutlinedInput-notchedOutline': { border: "none" } }}
      />
      <Box>footer</Box>
    </Dialog>
  );
};

export default ComposeMails;
