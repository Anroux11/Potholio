"use client";

// import { getAxiosInstance } from "@/utils/axiosInstance";
import { ImageReducer } from "./reducer";
import { useContext, useReducer } from "react";

import { supabase } from "@/utils/supabaseClient";
import { ImageActionContext, ImageStateContext, INITIAL_STATE } from "./context";
import { uploadImageError, uploadImagePending, uploadImageSuccess } from "./actions";

export const ImageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ImageReducer, INITIAL_STATE);

//   const getImage = async (request: IImage) => {
//     dispatch(submitJobApplicationPending());
//     instance
//       .post(endpoint, request)
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch(submitJobApplicationSuccess());
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         dispatch(submitJobApplicationError());
//       });
//   };

//   const getJobApplications = async () => {
//     dispatch(getJobApplicationsPending());
//     const endpoint = `/api/services/app/JobApplication/GetAll`;
//     await instance
//       .get(endpoint)
//       .then((response) => {
//         dispatch(getJobApplicationsSuccess(response.data.result.items));
//       })
//       .catch((error) => {
//         console.error(error);
//         dispatch(getJobApplicationsError());
//       });
//   };

//   const updateJobApplication = async (request: IJobApplication) => {
//     dispatch(UpdateJobApplicationPending());
//     const endPoint = `/api/services/app/JobApplication/Update`;
//     await instance
//       .put(endPoint, request)
//       .then((response) => {
//         dispatch(UpdateJobApplicationSuccess(response.data.resutls));
//       })
//       .catch((err) => {
//         dispatch(UpdateJobApplicationError());
//         console.error(err);
//       });
//   };

//   const getJobApplicationById = async (id: string) => {
//     dispatch(getJobApplicationByIdPending());
//     const endpoint = `/api/services/app/JobApplication/Get?id=${id}`;
//     try {
//       const response = await instance.get(endpoint);
//       if (response.status === 200) {
//         dispatch(getJobApplicationByIdSuccess(response.data.result));
//         return response.data.result;
//       }
//     } catch (error) {
//       console.error("Error getting job application:", error);
//       dispatch(getJobApplicationByIdError());
//       throw error;
//     }
//   };

  const uploadImage = async (file: File): Promise<string> => {
    dispatch(uploadImagePending());
    const timeStamp = Date.now();
    const filePath = `/${timeStamp}_${file.name}`;
    const { error } = await supabase.storage
      .from("potholio-photos")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      dispatch(uploadImageError());
      console.error("Image upload error:", error);
      throw error;
    }

    dispatch(uploadImageSuccess());
    const {
      data: { publicUrl },
    } = supabase.storage.from("potholio-photos").getPublicUrl(filePath);
    return publicUrl;
  };

//   const resetStateFlags = async () => {
//     dispatch(resetStateFlagsAction());
//   };

  return (
    <ImageStateContext.Provider value={state}>
      <ImageActionContext.Provider
        value={{
          uploadImage
        }}
      >
        {children}
      </ImageActionContext.Provider>
    </ImageStateContext.Provider>
  );
};

export const useImageState = () => {
  const context = useContext(ImageStateContext);

  if (!context) {
    throw new Error(
      "useImageState must be used within a ImageProvider"
    );
  }
  return context;
};

export const useImageActions = () => {
  const context = useContext(ImageActionContext);

  if (!context) {
    throw new Error(
      "useImageState must be used within a ImageProvider"
    );
  }
  return context;
};
// function uploadImageSuccess(): any {
//     throw new Error("Function not implemented.");
// }

