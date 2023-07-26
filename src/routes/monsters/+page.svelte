<script>
  import all_monsters from "../../lib/json/monsters.json";
  import { goto } from '$app/navigation';
  const types = [
    "all",
    "aberration",
    "beast",
    "celestial",
    "construct",
    "dragon",
    "elemental",
    "fey",
    "fiend",
    "giant",
    "humanoid",
    "humanoid (shapechanger)",
    "humanoid (elf)",
    "humanoid (half-elf)",
    "humanoid (human)",
    "monstrosity",
    "ooze",
    "plant",
    "undead",
  ];

  const crs = [
    "all",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
  ];
  let challenge = "all";
  let type = "all";
  let currentMonster;

  $: monster_list = (() => {
    let outPut = all_monsters["monsters"];
    if (challenge !== "all") {
      outPut = outPut.filter((x) => x["cr"] === challenge);
    }
    if (type !== "all") {
      outPut = outPut.filter((x) => x["type"] === type);
    }
    return outPut;
  })();
</script>

<svelte:head>
  <title>Yndr</title>
  <meta name="description" content="Yndr" />
</svelte:head>

<article>
  <header>Monsters</header>

  <form>
    <select bind:value={currentMonster} on:change={()=> {
		let id = monster_list.filter(x => x["name"] === currentMonster)[0]["numberId"]
		// goto(`/monster/${id}`)
    window.open(`/monster/${id}`, '_blank', "location=yes")
	}} name="monster">
      {#each monster_list as monster}
        <option>{monster["name"]}</option>
      {/each}
    </select>

    <select bind:value={challenge} name="cr">
      {#each crs as cr}
        <option>{cr}</option>
      {/each}
    </select>

    <select bind:value={type} name="type">
      {#each types as type}
        <option>{type}</option>
      {/each}
    </select>
  </form>
</article>

<style></style>
