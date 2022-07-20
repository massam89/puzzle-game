export default function createRandomArray(memberNum) {
  const nums = [];
  for (let i = 1; i <= memberNum; i++) {
    nums.push(i);
  }

  const ranNums = [];
  let i = nums.length;
  let j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }

  return ranNums;
}
