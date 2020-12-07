class Rule {
  type: string;
  contains: { [key: string]: { rule: Rule; quantity: number } };
  containedBy: Rule[];

  constructor(type: string) {
    this.type = type;
    this.contains = {};
    this.containedBy = [];
  }

  pushContains(rule: Rule, quantity: number) {
    this.contains[rule.type] = {
      rule,
      quantity,
    };

    rule.pushContainedBy(this);
  }

  pushContainedBy(rule: Rule) {
    this.containedBy.push(rule);
  }
}

const createRule = (ruleMap: Map<string, Rule>, name: string) => {
  if (ruleMap.has(name)) {
    return ruleMap.get(name);
  }

  const rule = new Rule(name);
  ruleMap.set(name, rule);

  return rule;
};

const constructRuleMap = (input: string[]) => {
  const ruleMap: Map<string, Rule> = new Map();

  input.forEach((ruleString: string) => {
    const [outer, contains] = ruleString.split("contain");
    const typeName = outer.trim().endsWith("s") ? outer.trim() : `${outer.trim()}s`;
    const rule = createRule(ruleMap, typeName);
    const containsStrings = contains.replace(/\.$/, "").split(",").map((s) =>
      s.trim()
    );

    containsStrings.forEach((containRule) => {
      if (/no other bags/i.test(containRule)) {
        return;
      }

      const [, quantity, type] = containRule.match(/^(\d+)\s(.+)$/) || [];
      const subTypeName = type.trim().endsWith("s") ? type.trim() : `${type.trim()}s`;
      const subRule = createRule(ruleMap, subTypeName);

      if (subRule) {
        rule?.pushContains(subRule, Number(quantity));
      }
    });
  });

  return ruleMap;
};

const getContainedBy = (rule: Rule): Rule[] => {
  const directParents = rule.containedBy;
  const nested = directParents?.reduce((nested: Rule[], outerRule: Rule) => {
    return [...getContainedBy(outerRule), ...nested];
  }, []);

  const all = [...directParents, ...nested];
  const unique: { [key: string]: Rule} = {};
  all.forEach((rule) => {
    if (rule.type) {
      unique[rule.type] = rule;
    }
  });

  return Object.values(unique);
};

export const part1 = (input: Array<string>) => {
  const rules = constructRuleMap(input);
  const shinyGoldBagRule = rules.get("shiny gold bags");

  if (!shinyGoldBagRule) {
    throw new Error("Invalid bag type");
  }

  const allNested = getContainedBy(shinyGoldBagRule);
  return allNested.length;
};

export const part2 = (input: Array<string>) => {};
