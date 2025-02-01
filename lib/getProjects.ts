"use server"

import { supabase } from "./supabase"

export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from("Project")
      .select("*")
      .order("id", { ascending: true })

    if (error) {
      console.error("Error fetching projects:", error)
      throw new Error("Failed to fetch projects")
    }

    if (!data) {
      return []
    }

    return data
  } catch (error) {
    console.error("Error in getProjects:", error)
    throw new Error("Failed to fetch projects")
  }
}

