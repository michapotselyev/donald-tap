import { Skill, SkillBranch, SkillTree } from "src/models";
import { logger } from "src/utils/logger";

export class TreesService {
  public async getAll() {
    try {
      const skillTrees = await SkillTree.findAll({
        include: [
          {
            model: SkillBranch,
            as: 'branches',
            include: [
              {
                model: Skill,
                as: 'skills',
              },
            ],
          },
        ],
      });

      return { code: 200, values: skillTrees };
    } catch (error) {
      logger.error(`Error while fetching skill trees: ${(error as Error).message}`);
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }

  public async getById(id: string) {
    try {
      const skillTree = await SkillTree.findByPk(id, {
        include: [
          {
            model: SkillBranch,
            as: 'branches',
            include: [
              {
                model: Skill,
                as: 'skills',
              },
            ],
          },
        ],
      });

      if (!skillTree) {
        return { code: 404, values: `Skill tree with ID ${id} not found.` };
      }

      return { code: 200, values: skillTree };
    } catch (error) {
      logger.error(`Error while fetching skill trees: ${(error as Error).message}`);
      return { code: 500, values: `Error while processing request: ${error}` };
    }
  }
}
