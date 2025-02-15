import { useEffect, useState } from "react";

export function generateRandomSymbols(length: number) {
  const symbols = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    result += symbols[randomIndex];
  }
  return result;
}

interface EncryptedTextProps {
  text: string;
  interval?: number;
  chars?: string;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  interval = 5,
  chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?",
}) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
        .slice(outputText.length)
        .split("")
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }

  return (
    <>
      {outputText}
      {remainder}
    </>
  );
};
