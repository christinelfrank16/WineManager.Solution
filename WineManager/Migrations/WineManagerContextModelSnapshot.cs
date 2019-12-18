﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WineManager.Models;

namespace WineManager.Migrations
{
    [DbContext(typeof(WineManagerContext))]
    partial class WineManagerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("WineManager.Models.Favorite", b =>
                {
                    b.Property<int>("FavoriteId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("WineItemId");

                    b.HasKey("FavoriteId");

                    b.HasIndex("WineItemId");

                    b.ToTable("Favorites");
                });

            modelBuilder.Entity("WineManager.Models.Location", b =>
                {
                    b.Property<int>("LocationId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("XSlotCount");

                    b.Property<int>("YSlotCount");

                    b.HasKey("LocationId");

                    b.ToTable("Locations");
                });

            modelBuilder.Entity("WineManager.Models.Slot", b =>
                {
                    b.Property<int>("SlotId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("LocationId");

                    b.Property<int>("WineItemId");

                    b.HasKey("SlotId");

                    b.HasIndex("LocationId");

                    b.HasIndex("WineItemId");

                    b.ToTable("Slots");
                });

            modelBuilder.Entity("WineManager.Models.WineItem", b =>
                {
                    b.Property<int>("WineItemId")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Alcohol");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<string>("Origin");

                    b.Property<int>("Rating");

                    b.Property<int>("Score");

                    b.Property<string>("Scorer");

                    b.Property<string>("Style");

                    b.Property<string>("Varietal");

                    b.Property<int>("Vintage");

                    b.Property<string>("Vintner");

                    b.HasKey("WineItemId");

                    b.ToTable("WineItems");
                });

            modelBuilder.Entity("WineManager.Models.Favorite", b =>
                {
                    b.HasOne("WineManager.Models.WineItem", "WineItem")
                        .WithMany()
                        .HasForeignKey("WineItemId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WineManager.Models.Slot", b =>
                {
                    b.HasOne("WineManager.Models.Location", "Location")
                        .WithMany("Slots")
                        .HasForeignKey("LocationId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WineManager.Models.WineItem", "WineItem")
                        .WithMany()
                        .HasForeignKey("WineItemId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
