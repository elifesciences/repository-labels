import { Label } from '../interfaces/label';

// Returns true if the specified labels match
export function compareLabel(a: Label, b: Label): boolean {
  return a.name === b.name && a.description === b.description && a.color === b.color;
}

// Returns true if the specified name matches the specified label.
export function compareLabelByName(name: string, label: Label): boolean {
  return name === label.name;
}

// Returns true if the specified name is an alias of the specified label.
export function isLabelNameAnAlias(name: string, label: Label): boolean {
  return label.alias.includes(name);
}
