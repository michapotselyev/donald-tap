import { QueryInterface } from 'sequelize';

export {};

// export default {
//   up: async (queryInterface: QueryInterface) => {
//     // 1. Create Skill Tree
//     await queryInterface.bulkInsert('skill_trees', [
//       {
//         name: 'Skill Tree',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);

//     // 2. Get ID of inserted skill_tree
//     const skillTree: any = await queryInterface.sequelize.query(
//       `SELECT id FROM skill_trees WHERE name = 'Skill Tree' ORDER BY id DESC LIMIT 1;`
//     );

//     const skillTreeId = skillTree[0][0]?.id;

//     if (!skillTreeId) {
//       throw new Error('Ошибка при создании дерева навыков');
//     }

//     // 3. Add branches
//     const branches = [
//       { skillTreeId, name: 'Fortune Seeker', createdAt: new Date(), updatedAt: new Date() }, // Увеличение шансов на выпадение редких картинок
//       { skillTreeId, name: 'Might of Tap', createdAt: new Date(), updatedAt: new Date() }, // Сила нажатий
//       { skillTreeId, name: 'Endless Vigor', createdAt: new Date(), updatedAt: new Date() }, // Количество нажатий в день
//       { skillTreeId, name: 'Clockwork Touch', createdAt: new Date(), updatedAt: new Date() }, // Автокликер
//       { skillTreeId, name: 'Collector’s Vault', createdAt: new Date(), updatedAt: new Date() }, // Размер NFT-портфолио
//     ];

//     await queryInterface.bulkInsert('skill_branches', branches);

//     // 4. Get all ID for inserted branches
//     const branchIds: any = await queryInterface.sequelize.query(
//       `SELECT id, name FROM skill_branches WHERE skillTreeId = ${skillTreeId};`
//     );

//     // 5. Add skills for each branches
//     const skills = branchIds[0].reduce((acc: any[], branch: { id: number, name: string }) => {
//       switch (branch.name) {
//         case 'Fortune Seeker':
//           return acc.concat([
//             {
//               skillBranchId: branch.id,
//               name: 'Whisper of Luck',
//               description: 'Begin your journey into fortune.',
//               expCost: 1, // Начальный навык
//               effect: 'Increase rare drop chance by 1%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Glint of Destiny',
//               description: 'Feel the first signs of your rising fortune.',
//               expCost: 2, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 1.5%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Glimmer of Hope',
//               description: 'The chance for rare treasures grows brighter.',
//               expCost: 3, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 2%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Fate’s Spark',
//               description: 'Your connection to fortune strengthens.',
//               expCost: 5, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 2.5%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Serendipity’s Call',
//               description: 'Fortune begins to favor you.',
//               expCost: 8, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 3%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Touch of Fortune',
//               description: 'Your touch draws the favor of rare treasures.',
//               expCost: 12, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 3.5%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Echoes of Wealth',
//               description: 'The whispers of great fortune are clearer.',
//               expCost: 18, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 4%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Fortune’s Favor',
//               description: 'The winds of luck begin to blow in your direction.',
//               expCost: 27, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 5%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Prosperity’s Hand',
//               description: 'Your hand seems guided by luck.',
//               expCost: 41, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 6%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Treasure’s Whisper',
//               description: 'You begin to hear the call of hidden riches.',
//               expCost: 62, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 7%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Flicker of Fortune',
//               description: 'Luck lights the way to rarer finds.',
//               expCost: 93, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 8%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Gift of Fate',
//               description: 'The favor of fortune is upon you.',
//               expCost: 140, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 9%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Rarefinder’s Touch',
//               description: 'Your touch now beckons rare treasures more frequently.',
//               expCost: 210, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 10%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Serendipity’s Grace',
//               description: 'Fortune and rare finds seem to follow you naturally.',
//               expCost: 315, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 15%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             },
//             {
//               skillBranchId: branch.id,
//               name: 'Master of Fortune',
//               description: 'You have mastered the art of fortune, rare treasures are drawn to you.',
//               expCost: 473, // 1.5x от предыдущего
//               effect: 'Increase rare drop chance by 20%',
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             }
//           ]);
      
//         default:
//           break;
//       }
//     }, []);

//     // 6. Insert all skills
//     await queryInterface.bulkInsert('skills', skills);
//   },

//   down: async (queryInterface: QueryInterface) => {
//     await queryInterface.bulkDelete('skills', {}, {});
//     await queryInterface.bulkDelete('skill_branches', {}, {});
//     await queryInterface.bulkDelete('skill_trees', {}, {});
//   },
// };
