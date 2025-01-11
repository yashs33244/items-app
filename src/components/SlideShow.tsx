import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Slideshow = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;

  const handleNext = () => {
    if (!isLastSlide) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstSlide) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardHeader
          title={
            <Typography variant="h6">{slides[currentIndex].title}</Typography>
          }
        />
      </CardHeader>
      <CardContent>
        <div className="min-h-32 mb-6">
          <p className="text-gray-700">{slides[currentIndex].text}</p>
        </div>

        <div className="flex gap-2 justify-center">
          <Button onClick={handleRestart} disabled={isFirstSlide}>
            Restart
          </Button>
          <Button onClick={handlePrev} disabled={isFirstSlide}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastSlide}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Slideshow;
