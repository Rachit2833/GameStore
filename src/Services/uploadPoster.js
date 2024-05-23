import supabase from "../../Supabase";

export async function uploadPoster(file,bucket) {
  console.log(file,"files");

  

   let uniqueFilename = file[0].name;


  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(uniqueFilename, file[0], {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Error uploading file:", error);
    // Handle error as needed
  } else {
    // Handle success
  }
}