import { useEffect, useState } from "react";
import api from "../../../services/api";
import { toast } from "../../../Components/Toast";

export const useStory = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState("");
  const [stories, setStories] = useState([]);
  const [uploadedFiles, setUploadedFile] = useState(null);

  useEffect(() => {
    async function getStories() {
      const { data } = await api.get("/partner/story");

      setStories(data);
    }
    getStories();
  }, []);

  useEffect(() => {
    async function postStory() {
      if (!uploadedFiles) return;

      const data = new FormData();

      if (uploadedFiles) data.append("avatar", uploadedFiles.file);

      try {
        await api.post("/post/story", data);

        toast.error("Story enviado para análise");
      } catch {
        toast.error("Erro ao enviar story");
      }
    }
    postStory();
  }, [uploadedFiles]);

  async function DeleteStory() {
    try {
      await api.delete(`/story/${selectedStory._id}`);

      toast.error("Story deletado");
    } catch {
      toast.error("Erro ao deletar story");
    }
  }

  const statuses = {
    waiting_review: "Story - Aguardando revisão",
    rejected: "Story - Rejeitado",
    approved: "Story - Aprovado",
  };

  return [
    showModal,
    setShowModal,
    selectedStory,
    setSelectedStory,
    stories,
    statuses,
    uploadedFiles,
    setUploadedFile,
    DeleteStory,
  ];
};
