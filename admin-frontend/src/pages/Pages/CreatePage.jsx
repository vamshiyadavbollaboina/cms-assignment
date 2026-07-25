import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PageForm from "../../components/pages/PageForm";

import { addPage } from "../../store/slices/pageSlice";

const CreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const result = await dispatch(addPage(formData));

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/pages");
    }
  };

  return (
    <DashboardLayout>
      <h1>Create New Page</h1>

      <PageForm onSubmit={handleSubmit} />
    </DashboardLayout>
  );
};

export default CreatePage;