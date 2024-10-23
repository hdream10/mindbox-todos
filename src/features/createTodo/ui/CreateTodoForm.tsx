import { Box, IconButton, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Input } from "@/shared/ui";
import { useCreateTodo } from "../model/useCreateTodo";

export const CreateTodoForm = () => {
  const { value, handleChange, handleSave } = useCreateTodo();

  return (
    <form onSubmit={handleSave}>
      <Stack
        direction="row"
        spacing={0.5}
        alignItems="center"
        borderBottom="2px solid #EDEDED"
      >
        <IconButton sx={{ height: "fit-content" }} type="submit">
          <KeyboardArrowDownIcon fontSize="small" />
        </IconButton>
        <Box flex={1}>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="What needs to be done?"
            name="todo"
          />
        </Box>
      </Stack>
    </form>
  );
};
