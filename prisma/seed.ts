import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('password123', 10);

    await prisma.user.createMany({
        data: [
            {
                email: 'admin@example.com',
                username: 'admin',
                password: hashedPassword,
                firstName: 'System',
                lastName: 'Admin',
            },
            {
                email: 'jane@example.com',
                username: 'jane_doe',
                password: hashedPassword,
                firstName: 'Jane',
                lastName: 'Doe',
            },
            {
                email: 'john@example.com',
                username: 'john_doe',
                password: 'hashedPassword',
                firstName: 'Jane',
                lastName: 'Doe',
            },
        ],
        skipDuplicates: true,
    });

    console.log('✅ Users seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });