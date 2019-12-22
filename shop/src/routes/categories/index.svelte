<script>
  import CategoryCard from "../../components/ui/CategoryCard.svelte";
</script>

<div class="row">
  <div class="col-md-6">
    <CategoryCard title="Men" url="/categories/men" imgSrc="images/men.jpg" />
  </div>
  <div class="col-md-6">
    <CategoryCard
      title="Women"
      url="/categories/women"
      imgSrc="images/women.jpg" />
  </div>
</div>
