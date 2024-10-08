import toast from "react-hot-toast";
import { Table } from "./db-tables/WorkspaceDB";
import type { ModelsListRespItem } from "./model-manager/types";
import { api } from "./utils/comfyapp";

export function fetchApi(
  route: string,
  options?: RequestInit,
): Promise<Response> {
  if (api == null) {
    console.error("api is null!");
    throw new Error("api is null!");
  }
  return api.fetchApi(route, options);
}

export async function getDB(table: Table): Promise<string | undefined> {
  console.warn("[workspace deprecated] getDB is deprecated", table);
  try {
    const response = await fetchApi(`/workspace/get_db?table=${table}`);
    if (!response.ok) {
      return undefined;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workspace:", error);
    return undefined;
  }
}

export async function saveDB(table: Table, jsonData: string) {
  try {
    const response = await fetchApi("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ table, json: jsonData }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error saving workspace:", error);
  }
}

export async function updateUserModelsJsonGithub(
  username: string,
  repo_name: string,
  modelJson,
  access_token: string,
) {
  if (!access_token) {
    return;
  }

  try {
    // Get existing content
    const response1 = await fetch(
      `https://api.github.com/repos/${username}/${repo_name}/contents/user_models.json`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    if (!response1.ok) {
      throw new Error(`HTTP error! status: ${response1.status}`);
    }

    const data = await response1.json();

    const existingContent = JSON.parse(atob(data?.content));

    // TODO: Check if modelJson's name is same as any existing model object in the above
    // array, then don't add it again.

    const sha = data?.sha;
    console.log("Github debugging: ", modelJson, [
      ...existingContent,
      modelJson,
    ]);

    // Merge existing content with new content
    // const updatedContent = [...existingContent, ...modelJson];

    // const content = btoa(JSON.stringify(updatedContent, null, 2));

    // Update file in GitHub
    // const response2 = await fetchApi(
    //   `https://api.github.com/repos/${username}/${repo_name}/contents/user_models.json`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       authorization: access_token,
    //     },
    //     body: JSON.stringify({
    //       message: "Update user models",
    //       content,
    //       sha,
    //     }),
    //   },
    // );
    // return response2;
  } catch (error) {
    toast.error("Error while updating models.json on your GitHub repo");
    throw error;
  }
}

export async function updateFile(file_path: string, jsonData: string) {
  try {
    const response = await fetchApi("/workspace/update_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file_path: file_path,
        json_str: jsonData,
      }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    alert("Error saving workflow .json file: " + error);
    console.error("Error saving workspace:", error);
  }
}

export async function deleteFile(file_path: string, deleteEmptyFolder = false) {
  try {
    const response = await fetchApi("/workspace/delete_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file_path: file_path,
        deleteEmptyFolder,
      }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error deleting file:", error);
  }
}

export async function getSystemDir(root?: string) {
  try {
    const response = await fetchApi("/workspace/get_system_dir", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        absolute_dir: root ?? "",
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting workflows dir:", error);
  }
}

export async function openWorkflowsFolder() {
  try {
    const response = await fetchApi("/workspace/open_workflow_file_browser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error open workflows folder:", error);
  }
}

export async function fetchMyWorkflowsDir() {
  const resp = await fetchApi("/workspace/get_my_workflows_dir");
  const res = (await resp.json()) as {
    path?: string;
    error?: string;
    os: "win32" | "darwin" | "linux";
  };
  if (res.error) {
    alert(`Failed to fetch my workflows path: ${res.error}`);
  }
  return res;
}

export async function getAllModelsList() {
  try {
    const response = await fetchApi("/model_manager/get_model_list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result as Array<ModelsListRespItem & { date: number }>;
  } catch (error) {
    console.error("Error get all models list:", error);
  }
}

export async function getAllFoldersList() {
  try {
    const response = await fetchApi("/model_manager/get_folder_list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result as Record<string, string[]>;
  } catch (error) {
    console.error("Error get all models list:", error);
  }
}

export async function deleteLocalDiskFolder(folderPath: string) {
  try {
    const response = await fetchApi("/workspace/delete_folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        folder_path: folderPath,
      }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error move file:", error);
  }
}

export async function cancelDownload(savePath: string) {
  try {
    const response = await fetchApi("/model_manager/cancel_installation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        save_path: savePath,
      }),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error move file:", error);
  }
}

export async function copyFlowsToNewDirectory(
  sourceDir: string,
  dstDir: string,
) {
  try {
    const response = await fetchApi("/workspace/copy_json_files", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        src: sourceDir,
        dst: dstDir,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error copy flows to new directory:", error);
  }
}
