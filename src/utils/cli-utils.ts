import { ProcessEnv } from '../interfaces/process';

// Gets the specified configuration value in the order command line args > environment vars > default
function getConfigItem(args: string[], env: ProcessEnv, keys: string[], initial: string = ''): string {
  // Initialise to the default value
  let value = initial;

  // Retrieve if present, and overrite the value from the environment.
  for (let key of keys) {
    if (env[key]) {
      value = env[key] as string;
    }
  }

  // Retrive if present, and overite with the value supplied on the cli.
  for (let i = 0; i < args.length; i++) {
    if (keys.includes(args[i])) {
      if (++i < args.length) {
        value = args[i];
        break;
      }
    }
  }
  return value;
}

// Gets the value for the GitHub Organistation
export function getOrganistation(args: string[], env: ProcessEnv): string {
  return getConfigItem(args, env, ['-o', '--org', 'GITHUB_ORG'], '');
}

// Gets the value for the GitHub Repositorty
export function getRepository(args: string[], env: ProcessEnv): string {
  return getConfigItem(args, env, ['-r', '--repo', 'GITHUB_REPO'], '');
}

// Gets the value for the GitHub Token
export function getToken(args: string[], env: ProcessEnv): string {
  return getConfigItem(args, env, ['-t', '--token', 'GITHUB_TOKEN'], '');
}
