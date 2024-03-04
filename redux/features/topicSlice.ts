import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Topic {
  id: number;
  topicTitle: string;
  keywords: string[];
}

interface InitialState {
  allTopics: Topic[];
}

const initialState: InitialState = {
  allTopics: [],
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    addTopic: (state, action: PayloadAction<Topic>) => {
      const newTopic = action.payload;
      state.allTopics.push(newTopic);
    },
    removeTopic: (state, action: PayloadAction<number>) => {
      const topicIdToRemove = action.payload;
      state.allTopics = state.allTopics.filter(
        (topic) => topic.id !== topicIdToRemove
      );
    },
    updateTopic: (state, action: PayloadAction<Topic>) => {
      const editedTopic = action.payload;
      state.allTopics = state.allTopics.map((topic) =>
        topic.id === editedTopic.id ? editedTopic : topic
      );
    },
  },
});

export const { addTopic, updateTopic, removeTopic } = topicSlice.actions;
export default topicSlice.reducer;
