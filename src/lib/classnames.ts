type ConditionalClasses = {
  [classname: string]: boolean;
}

type Classes = (string | ConditionalClasses)[];

function conditionalClassesToString(classes: ConditionalClasses) {
  return Object.keys(classes)
    .filter(classname => classes[classname])
    .join(' ');
}

/**
 * Takes in a list of class names and conditional classnames and returns a string
 * containing the classes which should be applied
 * @param classes a list of classnames & conditional classnames
 * @returns a string of classnames
 */
export default function classnames(...classnames: Classes) {
  return classnames.map(classname => {
    if (typeof classname === 'string') {
      return classname;
    }
    return conditionalClassesToString(classname);
  }).join(' ');
}
