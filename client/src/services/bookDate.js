import api from "./api";

const bookService = {
  bookDate: async (user_id, date, motif, role) => {
    const book = { user_id, date, motif, role };
    return await api.post("/booking", book);
  },
};

export default bookService;
