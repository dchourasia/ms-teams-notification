import { setFailed, getInput, info } from "@actions/core";
import { Context } from "@actions/github/lib/context";
import { formatAndNotify } from "./utils";
import core from '@actions/core';
import * as github from '@actions/github'
import { GitHub } from "@actions/github/lib/utils";

try {
  // github.context.workflow
  // const myToken = core.getInput('github-token');
  // const octokit = github.getOctokit(myToken)
  // github.context.job
  console.log("starting the card")
  const showCardOnStart = getInput(`show-on-start`).toLowerCase() == "true";
  if (showCardOnStart) {
    formatAndNotify("start");
  } else {
    info("Configured to not show card upon job start.");
  }
} catch (error) {
  setFailed(error.message);
}

