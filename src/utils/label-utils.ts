import { Label } from '../interfaces/label'

// Returns true if the specified labels match
export function compareLabel(a: Label, b: Label): Boolean {
  return (a.name === b.name && a.description === b.description && a.color === b.color);
}

// Returns true if the specified name matches the specified label.
export function compareLabelByName(name: string, label: Label): Boolean {
  return (name === label.name) 
}

// Returns true if the specified name is an alias of the specified label.
export function isLabelNameAnAlias(name: string, label: Label): Boolean {
  return label.alias.includes(name);
};