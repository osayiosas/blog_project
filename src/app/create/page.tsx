// "use client";

// import Button from "@/components/button";
// import { firebaseConfig, formControls, initialBlogFormData } from "@/utils";
// import { useContext, useState } from "react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import { initializeApp } from "firebase/app";
// import Spinner from "@/components/spinner";
// import { GlobalContext } from "@/context";
// import { BlogFormData } from "@/utils/types";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const app = initializeApp(firebaseConfig);
// const stroage = getStorage(app, "gs://chatter-blog-app-82bba.appspot.com");

// function createUniqueFileName(fileName: string) {
//   const timeStamp = Date.now();
//   const randomString = Math.random().toString(36).substring(2, 12);

//   return `${fileName}-${randomString}-${timeStamp}`;
// }

// async function handleImageSaveToFirebae(file: any) {
//   const extractUniqueFileName = createUniqueFileName(file?.name);
//   const stroageRef = ref(stroage, `blog/${extractUniqueFileName}`);
//   const uploadImage = uploadBytesResumable(stroageRef, file);

//   return new Promise((resolve, reject) => {
//     uploadImage.on(
//       "state_changed",
//       (snapshot) => {},
//       (error) => reject(error),
//       () => {
//         getDownloadURL(uploadImage.snapshot.ref)
//           .then((url) => resolve(url))
//           .catch((error) => reject(error));
//       }
//     );
//   });
// }

// export default function Create() {
//   const { formData, setFormData } = useContext(GlobalContext);
//   const [imageLoading, setImageLoading] = useState<boolean>(false);
//   const { data: session } = useSession();
//   const router = useRouter()

//   console.log(session, "session");

//   async function handleBlogImageChange(
//     event: React.ChangeEvent<HTMLInputElement>
//   ) {
//     if (!event.target.files) return;
//     setImageLoading(true);
//     const saveImageToFirebase: any = await handleImageSaveToFirebae(
//       event.target.files[0]
//     );

//     if (saveImageToFirebase !== "") {
//       setImageLoading(false);
//       console.log(saveImageToFirebase, "saveImageToFirebase");
//       setFormData({
//         ...formData,
//         image: saveImageToFirebase,
//       });
//     }
//   }

//   async function handleSaveBlogPost() {
//     console.log(formData);

//     const res = await fetch("/api/blog-post/add-post", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ...formData,
//         userid: session?.user?.name,
//         userimage: session?.user?.image,
//         comments: [],
//       }),
//     });

//     const data = await res.json();

//     console.log(data, "data123");

//     if (data && data.success) {
//       setFormData(initialBlogFormData);
//       router.push('/blogs')
//     }
//   }

//   console.log(formData, "formData");

//   return (
//     <section className="overflow-hidden py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mb-12 rounded-md bg-[#afe3e4] py-10 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] ">
//               <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:2xl xl:text-2xl">
//                 Write Your Own Story
//               </h2>
//               <div>
//                 <div className="flex flex-col gap-3">
//                   <div className="flex gap-3">
//                     <div className={`${imageLoading ? "w-1/2" : "w-full"}`}>
//                       <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
//                         Upload image
//                       </label>
//                       <input
//                         id="fileinput"
//                         accept="image/*"
//                         max={1000000}
//                         type="file"
//                         onChange={handleBlogImageChange}
//                         className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
//                       />
//                     </div>

//                     {imageLoading ? (
//                       <div className="w-1/2">
//                         <Spinner />
//                       </div>
//                     ) : null}
//                   </div>

//                   <div className="-mx-4 flex flex-wrap">
//                     {formControls.map((control, index) => (
//                       <div key={index} className="w-full px-4">
//                         <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
//                           {control.label}
//                         </label>
//                         {control.component === "input" ? (
//                           <input
//                             type={control.type}
//                             name={control.id}
//                             placeholder={control.placeholder}
//                             onChange={(
//                               event: React.ChangeEvent<HTMLInputElement>
//                             ) => {
//                               setFormData({
//                                 ...formData,
//                                 [control.id]: event.target.value,
//                               });
//                             }}
//                             value={formData[control.id as keyof BlogFormData]}
//                             className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
//                           />
//                         ) : control.component === "textarea" ? (
//                           <textarea
//                             placeholder={control.placeholder}
//                             rows={5}
//                             name={control.id}
//                             onChange={(
//                               event: React.ChangeEvent<HTMLTextAreaElement>
//                             ) => {
//                               setFormData({
//                                 ...formData,
//                                 [control.id]: event.target.value,
//                               });
//                             }}
//                             value={formData[control.id as keyof BlogFormData]}
//                             className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
//                           />
//                         ) : control.component === "select" ? (
//                           <select
//                             key={index}
//                             name={control.id}
//                             onChange={(
//                               event: React.ChangeEvent<HTMLSelectElement>
//                             ) => {
//                               setFormData({
//                                 ...formData,
//                                 [control.id]: event.target.value,
//                               });
//                             }}
//                             value={formData[control.id as keyof BlogFormData]}
//                             placeholder={control.placeholder}
//                             className="w-full resize-none mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
//                           >
//                             <option value={""} id="">
//                               Select
//                             </option>
//                             {control.options.map((optionItem, index) => (
//                               <option
//                                 key={index}
//                                 id={optionItem.value}
//                                 value={optionItem.value}
//                               >
//                                 {optionItem.label}
//                               </option>
//                             ))}
//                           </select>
//                         ) : null}
//                       </div>
//                     ))}
//                     <div className="w-full px-4">
//                       <Button
//                         text="Create New Story"
//                         onClick={handleSaveBlogPost}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Button from "@/components/button";
import { firebaseConfig, formControls, initialBlogFormData } from "@/utils";
import { useContext, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import Spinner from "@/components/spinner";
import { GlobalContext } from "@/context";
import { BlogFormData } from "@/utils/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://chatter-blog-app-82bba.appspot.com");

function createUniqueFileName(fileName: string) {
  const timeStamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${fileName}-${randomString}-${timeStamp}`;
}

async function handleImageSaveToFirebase(file: any) {
  const uniqueFileName = createUniqueFileName(file?.name);
  const storageRef = ref(storage, `blog/${uniqueFileName}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => reject(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      }
    );
  });
}

export default function Create() {
  const { formData, setFormData } = useContext(GlobalContext);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const router = useRouter();

  async function handleBlogImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.files) return;
    setImageLoading(true);
    try {
      const savedImageUrl: any = await handleImageSaveToFirebase(
        event.target.files[0]
      );

      setFormData({
        ...formData,
        image: savedImageUrl,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setImageLoading(false);
    }
  }

  async function handleSaveBlogPost() {
    try {
      const res = await fetch("/api/blog-post/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userid: session?.user?.name,
          userimage: session?.user?.image,
          comments: [],
        }),
      });

      const data = await res.json();

      if (data && data.success) {
        setFormData(initialBlogFormData);
        router.push("/blogs");
      }
    } catch (error) {
      console.error("Error saving blog post:", error);
    }
  }

  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-[#afe3e4] py-10 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-2xl">
                Write Your Own Story
              </h2>
              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className={`${imageLoading ? "w-1/2" : "w-full"}`}>
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Upload image
                      </label>
                      <input
                        id="fileinput"
                        accept="image/*"
                        max={1000000}
                        type="file"
                        onChange={handleBlogImageChange}
                        className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
                      />
                    </div>

                    {imageLoading ? (
                      <div className="w-1/2">
                        <Spinner />
                      </div>
                    ) : null}
                  </div>

                  <div className="-mx-4 flex flex-wrap">
                    {formControls.map((control, index) => {
                      const {
                        id,
                        label,
                        component,
                        type = "text",
                        placeholder = "",
                        options = [],
                      } = control;

                      return (
                        <div key={index} className="w-full px-4">
                          <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                            {label}
                          </label>
                          {component === "input" ? (
                            <input
                              type={type}
                              name={id}
                              placeholder={placeholder}
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                setFormData({
                                  ...formData,
                                  [id]: event.target.value,
                                });
                              }}
                              value={formData[id as keyof BlogFormData]}
                              className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
                            />
                          ) : component === "textarea" ? (
                            <textarea
                              placeholder={placeholder}
                              rows={5}
                              name={id}
                              onChange={(
                                event: React.ChangeEvent<HTMLTextAreaElement>
                              ) => {
                                setFormData({
                                  ...formData,
                                  [id]: event.target.value,
                                });
                              }}
                              value={formData[id as keyof BlogFormData]}
                              className="w-full mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
                            />
                          ) : component === "select" ? (
                            <select
                              name={id}
                              onChange={(
                                event: React.ChangeEvent<HTMLSelectElement>
                              ) => {
                                setFormData({
                                  ...formData,
                                  [id]: event.target.value,
                                });
                              }}
                              value={formData[id as keyof BlogFormData]}
                              className="w-full resize-none mb-8 rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
                            >
                              <option value="" id="">
                                Select
                              </option>
                              {options.map((optionItem, index) => (
                                <option
                                  key={index}
                                  id={optionItem.value}
                                  value={optionItem.value}
                                >
                                  {optionItem.label}
                                </option>
                              ))}
                            </select>
                          ) : null}
                        </div>
                      );
                    })}
                    <div className="w-full px-4">
                      <Button
                        text="Create New Story"
                        onClick={handleSaveBlogPost}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

