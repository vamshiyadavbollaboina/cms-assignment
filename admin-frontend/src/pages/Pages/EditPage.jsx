import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PageForm from "../../components/pages/PageForm";

import {
  fetchSinglePage,
  editPage,
} from "../../store/slices/pageSlice";

const EditPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { selectedPage } = useSelector(
    (state) => state.pages
  );

  useEffect(() => {
    dispatch(fetchSinglePage(id));
  }, [dispatch, id]);

  const handleSubmit = async (data) => {
    const result = await dispatch(
      editPage({
        id,
        data,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/pages");
    }
  };

  if (!selectedPage) {
    return (
      <DashboardLayout>
        <p>Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1>Edit Page</h1>

      <PageForm
        initialData={selectedPage}
        onSubmit={handleSubmit}
      />
    </DashboardLayout>
  );
};

export default EditPage;