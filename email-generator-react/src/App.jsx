import { useState } from "react";
import "./App.css"; // Import the CSS file
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailContent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          width: "100%",
          maxWidth: 700,
          textAlign: "center",
          backgroundColor: "#ffffffdd",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          fontWeight={600}
          sx={{
            background:
              "linear-gradient(135deg, rgb(7, 56, 134) 0%, rgb(105, 2, 54) 80%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Email Reply Generator
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 3, bgcolor: "white", borderRadius: 1 }}
        />
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
            sx={{ bgcolor: "white", borderRadius: 1 }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
          fullWidth
          sx={{
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            background:
              "linear-gradient(135deg, rgb(7, 56, 134) 0%, rgb(105, 2, 54) 100%)",
            color: "white",
            borderRadius: 1,
          }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Generate Reply"
          )}
        </Button>
      </Paper>
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      {generatedReply && (
        <Paper
          elevation={6}
          sx={{
            mt: 4,
            p: 3,
            borderRadius: 4,
            width: "100%",
            maxWidth: 700,
            backgroundColor: "#ffffffdd",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            fontWeight={600}
            sx={{
              background:
                "linear-gradient(135deg, rgb(7, 56, 134) 0%, rgb(105, 2, 54) 30%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Generated Reply
          </Typography>
          <Box sx={{ position: "relative" }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply}
              inputProps={{ readOnly: true }}
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <IconButton
              sx={{ position: "absolute", top: 10, right: 20 }}
              onClick={handleCopy}
            >
              {copied ? (
                <CheckIcon sx={{ color: "#073886" }} />
              ) : (
                <ContentCopyIcon />
              )}
            </IconButton>
          </Box>
        </Paper>
      )}
    </Container>
  );
}

export default App;
