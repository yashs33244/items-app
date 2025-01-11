import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ItemListManager = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-4">
      <CardHeader title={<Typography variant="h6">Items List</Typography>} />
      <CardContent>
        <div className="flex gap-2 mb-4">
          <TextField
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter an item"
            fullWidth
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddItem}
            disableElevation
          >
            Add Item
          </Button>
        </div>

        <ul className="list-disc pl-6 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700 bg-gray-100 p-2">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ItemListManager;
