import api from "src/api";

const handleSubmit = async (term: string) => {
  await api.get("/search", {
    params: {
      q: term,
    },
  });
};
