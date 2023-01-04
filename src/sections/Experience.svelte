<script lang="ts">
  import type { Resume } from 'src/resume.schema';
  import { formatDate } from '../utils';

  export let experience: Resume.IWork[];
</script>

<section>
  {#each experience as work}
    <p>
      <span>
        {#if work.url != ''}<a href={work.url}>{work.name}</a>
          {:else}<span id="wn">{work.name}</span>{/if} | {work.position}</span>
      <span>{formatDate(work.startDate)} — {formatDate(work.endDate)}</span>
    </p>
    <ul>
      {#each work.highlights as highlight}
        <li>{@html highlight}</li>
      {/each}
    </ul>
  {/each}
</section>

<style lang="scss">
  p {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    font-size: var(--title);

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  a {
    font-family: var(--serif);
    font-weight: bold;
  }
  #wn {
    font-family: var(--serif);
    font-weight: bold;
  }
</style>
